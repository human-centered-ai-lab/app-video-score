import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Renderer2, ViewChild } from '@angular/core'

import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Stripe } from '../stripe';
import { Cut } from '../cut';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stripes',
  templateUrl: './stripes.component.html',
  styleUrls: ['./stripes.component.css']
})


export class StripesComponent implements OnInit {

  @Input() id: number;

  stripes: Stripe[];
  cuts:    Cut[];

  @ViewChild('imageCanvas')   imageCanvas: ElementRef;
  @ViewChild('overlayCanvas') overlayCanvas: ElementRef;

  constructor(private renderer: Renderer2, private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStripes();
    this.getCuts();
  }

  drawImages () {
   const ctx: CanvasRenderingContext2D = this.imageCanvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, 1500, 800);
    let i = 0;
    for (const s of this.stripes) {
//         console.log (i, s)
         const stripeimage = new Image();
         stripeimage.src = s.url;
         const y = i * 80;
         stripeimage.onload = function () {  ctx.drawImage(stripeimage, 0, y, 800, 75) };
         i = i + 1;
    }
  }

  drawOverlay () {
    const ctx: CanvasRenderingContext2D = this.overlayCanvas.nativeElement.getContext('2d');
    ctx.strokeStyle = '#ff0000';
    let i = 0;
    for (let c of this.cuts) {
      if (i > 0) {
        const y = Math.floor(c.fn / 1500.0);
        const x = 800 * (c.fn - y * 1500) / 1500;
        ctx.beginPath();
        ctx.moveTo(x, y * 80 - 1);
        ctx.lineTo(x, y * 80 + 75 + 1);
        ctx.stroke();
        //console.log(c.fn, x,y)
      }
      i += 1;
    }
  }

  assignStripesAndDrawImages (stripes): void {
      this.stripes = stripes;
      const h = this.stripes.length * 80;
      this.renderer.setAttribute(this.imageCanvas.nativeElement, 'height', h.toString());
      this.drawImages();
  }

  assignCutsAndDrawOverlay (cuts): void {
      this.cuts = cuts;
      const lastfn =  cuts[cuts.length - 1].fn;
      const h = 80 * Math.ceil(lastfn / 1500.0);
      this.renderer.setAttribute(this.overlayCanvas.nativeElement, 'height', h.toString());
      this.drawOverlay();
  }

  getStripes(): void {
    this.movieService.getStripes(this.id)
        .subscribe(stripes => this.assignStripesAndDrawImages(stripes)  );
  }

  getCuts(): void {
    this.movieService.getCuts(this.id)
        .subscribe ( cuts => this.assignCutsAndDrawOverlay(cuts) );
  }

}
