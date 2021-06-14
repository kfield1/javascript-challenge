from flask import Flask, jsonify, render_template
app = Flask(__name__)
@app.route("/")
def hello_world():
    return "Hello World"

@app.route("/json")
def json_route():
    j = [1,2,3,4]
    return jsonify(j)

@app.route('/someHTML')
def someHTML():
    return render_template ('index.html')
    
if __name__ =="__main__":
    app.run(debug=True)
