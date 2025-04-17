import pandas as pd
import pandas as pd


df = pd.read_csv('/content/realistic_insurance_claims_final (5).csv')

# Display the first few rows
print(df.head())
print(df['Claim_Status'].value_counts())
# Drop Claim_ID, Registration_Date, Accident_Location, Add_On_Coverage, Policy_Type
df = df.drop(['Claim_ID', 'Registration_Date', 'Accident_Location', 'Add_On_Coverage', 'Policy_Type'], axis=1)

# Drop Accident_Date
df = df.drop(['Accident_Date'], axis=1)
# Encode Manufacturer, Model, Segment, Damage_Subtype, Damaged_Part
from sklearn.preprocessing import LabelEncoder

# Initialize LabelEncoder
label_encoder = LabelEncoder()

# Columns to encode
categorical_cols = ['Manufacturer', 'Model', 'Segment', 'Damage_Subtype', 'Damaged_Part']

# Apply Label Encoding to each categorical column
for col in categorical_cols:
    df[col] = label_encoder.fit_transform(df[col].astype(str))

# Save to a new CSV file
df.to_csv('encoded_data.csv', index=False)


import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

# Load the dataset
df = pd.read_csv('/content/encoded_data.csv', header=None)

# Rename columns for clarity
columns = [
    'Year', 'Vehicle_Age', 'Policy_Tenure', 'Claim_Count', 'Driver_Age', 'Gender',
    'Insured_Value', 'Average_Premium', 'Total_Claimed', 'Cause', 'Days_To_Report',
    'Witnesses', 'Insurance_Company', 'Policy_Limit', 'Coverage_Ratio', 'Claim_Amount',
    'Claim_Ratio', 'Damage_Type', 'Repair_Cost', 'Claim_Status', 'Approved_Amount',
    'Rejection_Reason', 'Fraud_Probability'
]
df.columns = columns

# Step 1: Calculate Fraud Score
def damage_weight(damage_type):
    if damage_type == 'Minor Damage':
        return 1
    elif damage_type == 'Moderate Damage':
        return 2
    else:
        return 3

def status_weight(status):
    if status == 'Approved':
        return 1
    elif status == 'In process':
        return 2
    else:
        return 3

df['Damage_Weight'] = df['Damage_Type'].apply(damage_weight)
df['Status_Weight'] = df['Claim_Status'].apply(status_weight, convert_dtype=True)

df['Fraud_Score'] = (
    0.3 * (df['Claim_Amount'] / df['Insured_Value']) +
    0.2 * df['Damage_Weight'] +
    0.2 * df['Status_Weight'] +
    0.2 * (df['Vehicle_Age'] * df['Claim_Amount'] / df['Insured_Value']) +
    0.1 * (1 / df['Policy_Tenure'])
)

df['Fraud_Score'] = df['Fraud_Score'].apply(lambda x: min(max(x * 100, 0), 100))

# Step 2: Impute Claim_Status
df.loc[df['Fraud_Score'] > 70, 'Claim_Status'] = 'Rejected'
df.loc[df['Fraud_Score'] < 30, 'Claim_Status'] = 'Approved'
df.loc[(df['Fraud_Score'] >= 30) & (df['Fraud_Score'] <= 70), 'Claim_Status'] = 'In process'

# Step 3: Correlation Analysis
numerical_cols = df.select_dtypes(include=[np.number]).columns
correlation_matrix = df[numerical_cols].corr()

# Remove highly correlated features
threshold = 0.8
high_corr_features = set()
for i in range(len(correlation_matrix.columns)):
    for j in range(i):
        if abs(correlation_matrix.iloc[i, j]) > threshold:
            colname = correlation_matrix.columns[i]
            high_corr_features.add(colname)

df_reduced = df.drop(columns=high_corr_features)

# Step 4: Dimensionality Reduction with PCA
scaler = StandardScaler()
scaled_data = scaler.fit_transform(df_reduced[numerical_cols])

pca = PCA(n_components=0.95)  # Retain 95% variance
principal_components = pca.fit_transform(scaled_data)

# Create a new DataFrame with principal components
pca_columns = [f'PC{i+1}' for i in range(principal_components.shape[1])]
df_pca = pd.DataFrame(principal_components, columns=pca_columns)

# Combine PCA results with non-numerical columns
final_df = pd.concat([df_reduced.drop(columns=numerical_cols), df_pca], axis=1)

# Save the final dataset
final_df.to_csv('processed_data.csv', index=False)

print("Fraud Score, Claim_Status Imputation, and Dimensionality Reduction Completed!")
