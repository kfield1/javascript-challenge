from flask import Flask, jsonify
app = Flask(__name__)
@app.route("/")
def hello_world():
    return "Hello World"

@app.route("/json")
def json_route():
    j = [
        {1:12},
        {2:13},
        {'something', 'else'},
    ]
    return jsonify(j)

    
if __name__ =="__main__":
    app.run(debug=True)
