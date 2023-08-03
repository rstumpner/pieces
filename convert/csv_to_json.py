import pandas as pd
df = pd.read_csv (r'csv_example.csv')
df.to_json (r'csv_export.json')