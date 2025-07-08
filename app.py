from flask import Flask, render_template

template_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')
static_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')



if __name__ == '__main__':
    app.run(debug=True)
