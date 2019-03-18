# -*- coding: utf-8 -*-
""" Web Server Gateway Interface  """

import os
import sys
print(sys.path)

from server.app import create_app

socketio, app = create_app(os.getenv("FLASK_CONFIG") or "default")

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000)
