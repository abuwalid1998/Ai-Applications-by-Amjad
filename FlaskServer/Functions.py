from diffusers import StableDiffusionPipeline
import torch
from PIL import Image
import io


def load_model(local_model_path: str):
    pipe = StableDiffusionPipeline.from_pretrained(local_model_path, use_auth_token=None)
    pipe.to("cuda" if torch.cuda.is_available() else "cpu")
    return pipe

def load_model2(model_path: str) -> StableDiffusionPipeline:
    # Ensure that the model path contains all required components
    try:
        print("Loading model...")
        pipe = StableDiffusionPipeline.from_pretrained(model_path, local_files_only=True)
        pipe.to("cuda" if torch.cuda.is_available() else "cpu")
        return pipe
    except ValueError as e:
        print(f"Error loading model: {e}")
        raise

def generate_image(prompt: str) -> Image:
    # Load the model
    print("Loading model...")
    local_model_path = "Models/CompVis"
    pipe = load_model(local_model_path)

    # Generate the image with optimized settings
    with torch.no_grad():
        print("Generating image...")
        image = pipe(prompt, num_inference_steps=25).images[0]  # Adjust `num_inference_steps` for faster results

    return image


def generate_3dimage(prompt: str) -> Image:
    # Load the model
    print("Loading model...")
    local_model_path = "Models/OpenAi"
    pipe = load_model2(local_model_path)

    # Generate the image with optimized settings
    with torch.no_grad():
        print("Generating image...")
        image = pipe(prompt, num_inference_steps=25).images[0]  # Adjust `num_inference_steps` for faster results

    return image
