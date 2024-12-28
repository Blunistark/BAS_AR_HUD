from flask import Flask, send_from_directory
import ssl
import os

app = Flask(__name__, static_folder='static')

# Route to serve index.html from the static folder
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    # Run the server with SSL
    app.run(host='192.168.139.80', port=8081, ssl_context=('server.cert', 'server.key'))
