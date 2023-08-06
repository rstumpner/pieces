import pandas as pd
df = pd.read_excel (r'together23_pieces_datenbank.xlsx')
df.to_json (r'together23_pieces_datenbank.json', orient='records')
df.to_csv (r'together23_pieces_datenbank.csv',index = None, header=True)