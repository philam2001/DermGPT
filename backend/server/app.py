from flask import Flask, request, jsonify
import openai
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

# Replace with your OpenAI API key
openai.api_key = "YOUR_OPENAI_API_KEY"
FLASK_SERVER_BASE_URL = os.getenv("FLASK_SERVER_BASE_URL", "http://localhost:5000")


@app.route('/ask', methods=['POST'])
def ask_gpt():
    data = request.json
    user_input = data.get("question", "")
    
    if user_input is None:
        return jsonify({"error": "No question provided"}), 400

    try:
        # Sending a request to OpenAI's API
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=f"The user has asked about dermatology: {user_input}. Provide helpful and relevant advice or information.",
            temperature=0.6,
            max_tokens=150
        )
        
        # Extract the answer
        answer = response.choices[0].text.strip()
        
        return jsonify({"answer": answer})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)