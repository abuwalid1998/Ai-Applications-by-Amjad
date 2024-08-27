import io
import torch
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from transformers import AutoModelForSeq2SeqLM
from transformers import AutoTokenizer, AutoModelForCausalLM

from Functions import generate_image, load_model, generate_3dimage

app = Flask(__name__)
CORS(app)



@app.route('/summarize', methods=['POST'])
def summarize():
    tokenizer_summarization = AutoTokenizer.from_pretrained("Models/facebook-summarize")
    model_summarization = AutoModelForSeq2SeqLM.from_pretrained("Models/facebook-summarize")
    data = request.get_json()
    text = data.get('text')
    if not text:
        return jsonify({'error': 'No text provided'}), 400

    # Tokenize the input text
    inputs = tokenizer_summarization(text, return_tensors="pt")

    # Generate summary using the model
    with torch.no_grad():
        summary_ids = model_summarization.generate(inputs['input_ids'], max_length=150, min_length=40,
                                                   length_penalty=2.0, num_beams=4, early_stopping=True)

    # Decode the generated summary
    summary = tokenizer_summarization.decode(summary_ids[0], skip_special_tokens=True)

    return jsonify({'summary': summary})


@app.route('/generate-image', methods=['POST'])
def generate_image_route():
    data = request.json
    text = data.get('text')

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    # Generate the image
    image = generate_image(text)

    print("Prepared image")
    # Convert the PIL Image to bytes
    img_bytes = io.BytesIO()
    image.save(img_bytes, format='PNG')
    img_bytes.seek(0)

    return send_file(img_bytes, mimetype='image/png')


@app.route('/generate-3dimage', methods=['POST'])
def generate_3dimage_route():
    data = request.json
    text = data.get('text')

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    # Generate the image
    image = generate_3dimage(text)

    print("Prepared image")
    # Convert the PIL Image to bytes
    img_bytes = io.BytesIO()
    image.save(img_bytes, format='PNG')
    img_bytes.seek(0)

    return send_file(img_bytes, mimetype='image/png')


if __name__ == '__main__':
    app.run(debug=True)
