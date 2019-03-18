# -*- coding: utf-8 -*-

def init_celery(app, celery):
    """Add flask server context to celerytasks.Task"""
    TaskBase = celery.Task
    class ContextTask(TaskBase):
        abstract = True
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)
    celery.Task = ContextTask