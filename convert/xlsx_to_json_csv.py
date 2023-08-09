# import python libarys
import pandas as pd

# set path variables
import_xlsx = 'together23_pieces_datenbank.xlsx'
export_json = 'together23_pieces_datenbank.json'
export_csv = 'together23_pieces_datenbank.csv'

print(import_xlsx)
# Read imput 
df = pd.read_excel (r''+import_xlsx,sheet_name='export')

# export to dataformat
df.to_json (r''+export_json, orient='records')
df.to_csv (r''+export_csv,index = None, header=True)