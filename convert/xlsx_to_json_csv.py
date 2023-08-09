# import python libarys
import pandas as pd

# set path variables
import_prefix = 'convert/'
import_xlsx = 'together23_pieces_datenbank.xlsx'
export_prefix = 'static/'
export_json = 'challenges.json'
export_csv = 'challenges.csv'

print(import_xlsx)
# Read imput 
df = pd.read_excel (r''+import_prefix+import_xlsx,sheet_name='export')

# export to dataformat
df.to_json (r''+export_prefix+export_json, orient='records')
df.to_csv (r''+export_prefix+export_csv,index = None, header=True)