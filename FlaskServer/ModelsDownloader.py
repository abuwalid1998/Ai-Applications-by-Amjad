from diffusers import ShapEPipeline

# Clear the cache by removing the directory
import shutil
import os

model_cache_dir = r"Models/OpenAi"
if os.path.exists(model_cache_dir):
    shutil.rmtree(model_cache_dir)

# Re-download the model
model_id = "openai/shap-e"
pipeline = ShapEPipeline.from_pretrained(model_id)

# Save the model again
pipeline.save_pretrained(model_cache_dir)