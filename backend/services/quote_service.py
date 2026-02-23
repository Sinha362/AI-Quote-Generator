import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

def generate_quote(keyword: str):
    prompt = f"""
    Write a short motivational quote (not more than 20 words) that MUST include the word '{keyword}'. 
    Not any Explaination. 
    """

    response = model.generate_content(prompt)

    return response.text.strip()