import os
import openai

openai.api_key = ("<your open-api api key>") # reaplce <> with your openai api key
 
while True:
  question = input("\033[34mwhat is your question?\n\033[0m")
  if question.lower() == "exit":
    print("\033[31mEXIT\033[0m")
    break
	
  completion = openai.ChatCompletion.create(
	model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": "You are helpful assistant. Answer the given question."},
              {"role": "user", "content": question}
              ]
         )
  print("\033[32m" + completion.choices[0].message.content + "\n")
