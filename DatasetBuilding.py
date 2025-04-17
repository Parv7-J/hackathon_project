import pandas as pd
import numpy as np
from datetime import datetime
import random
from tqdm import tqdm

# Load the dataset
df = pd.read_csv('/content/car_insurance_claims_dataset (2) (2).csv')

# Standardize manufacturer names based on CarDekho naming conventions
manufacturer_mapping = {
    'Maruti Suzuki': 'Maruti',
    'Mercedes-Benz': 'Mercedes',
    'TATA AIG': 'Tata',  # This is actually an insurer, not manufacturer
    'BMW': 'BMW',
    'Audi': 'Audi',
    'Volkswagen': 'Volkswagen',
    'Toyota': 'Toyota',
    'Hyundai': 'Hyundai',
    'Honda': 'Honda',
    'Ford': 'Ford',
    'Renault': 'Renault',
    'Mahindra': 'Mahindra',
    'Kia': 'Kia',
    'MG': 'MG',
    'Skoda': 'Skoda',
    'Tata': 'Tata'
}

df['Manufacturer'] = df['Manufacturer'].replace(manufacturer_mapping)

# Fill missing manufacturers based on models
model_to_manufacturer = {
    'Brezza': 'Maruti',
    'WagonR': 'Maruti',
    'Celerio': 'Maruti',
    'Ertiga': 'Maruti',
    'Alto': 'Maruti',
    'Swift': 'Maruti',
    'Dzire': 'Maruti',
    'Baleno': 'Maruti',
    'Creta': 'Hyundai',
    'Verna': 'Hyundai',
    'i20': 'Hyundai',
    'Venue': 'Hyundai',
    'Aura': 'Hyundai',
    'Alcazar': 'Hyundai',
    'Tucson': 'Hyundai',
    'Nexon': 'Tata',
    'Harrier': 'Tata',
    'Safari': 'Tata',
    'Tiago': 'Tata',
    'Tigor': 'Tata',
    'Altroz': 'Tata',
    'Punch': 'Tata',
    'XUV700': 'Mahindra',
    'Scorpio': 'Mahindra',
    'Thar': 'Mahindra',
    'Bolero': 'Mahindra',
    'Marazzo': 'Mahindra',
    'TUV300': 'Mahindra',
    'Seltos': 'Kia',
    'Sonet': 'Kia',
    'Carnival': 'Kia',
    'EV6': 'Kia',
    'Carens': 'Kia',
    'Innova': 'Toyota',
    'Fortuner': 'Toyota',
    'Glanza': 'Toyota',
    'Urban Cruiser': 'Toyota',
    'Camry': 'Toyota',
    'Vellfire': 'Toyota',
    'City': 'Honda',
    'Amaze': 'Honda',
    'WR-V': 'Honda',
    'Jazz': 'Honda',
    'Civic': 'Honda',
    'CR-V': 'Honda',
    'Polo': 'Volkswagen',
    'Vento': 'Volkswagen',
    'Taigun': 'Volkswagen',
    'Virtus': 'Volkswagen',
    'Tiguan': 'Volkswagen',
    'Kushaq': 'Skoda',
    'Slavia': 'Skoda',
    'Octavia': 'Skoda',
    'Superb': 'Skoda',
    'Kodiaq': 'Skoda',
    'Kiger': 'Renault',
    'Triber': 'Renault',
    'Duster': 'Renault',
    'Kwid': 'Renault',
    'Hector': 'MG',
    'Astor': 'MG',
    'Gloster': 'MG',
    'ZS EV': 'MG',
    'Comet EV': 'MG',
    '3 Series': 'BMW',
    '5 Series': 'BMW',
    '7 Series': 'BMW',
    'X1': 'BMW',
    'X3': 'BMW',
    'X5': 'BMW',
    'X7': 'BMW',
    'A-Class': 'Mercedes',
    'C-Class': 'Mercedes',
    'E-Class': 'Mercedes',
    'S-Class': 'Mercedes',
    'GLA': 'Mercedes',
    'GLC': 'Mercedes',
    'GLE': 'Mercedes',
    'GLS': 'Mercedes',
    'A3': 'Audi',
    'A4': 'Audi',
    'A6': 'Audi',
    'A8': 'Audi',
    'Q3': 'Audi',
    'Q5': 'Audi',
    'Q7': 'Audi',
    'e-tron': 'Audi'
}

# Fill missing manufacturers based on model
for idx, row in df.iterrows():
    if pd.isna(row['Manufacturer']) and not pd.isna(row['Model']):
        if row['Model'] in model_to_manufacturer:
            df.at[idx, 'Manufacturer'] = model_to_manufacturer[row['Model']]

# Real-world model pricing data (2023 prices from CarDekho and other sources)
model_pricing = {
    'Maruti': {
        'Brezza': (800000, 1400000),
        'Swift': (600000, 900000),
        'Dzire': (700000, 1100000),
        'Baleno': (700000, 1200000),
        'WagonR': (500000, 700000),
        'Celerio': (500000, 700000),
        'Ertiga': (900000, 1500000),
        'Alto': (300000, 500000)
    },
    'Hyundai': {
        'Creta': (1100000, 2000000),
        'Verna': (900000, 1600000),
        'i20': (700000, 1200000),
        'Venue': (800000, 1400000),
        'Aura': (600000, 1000000),
        'Alcazar': (1700000, 2500000),
        'Tucson': (2500000, 3500000)
    },
    'Tata': {
        'Nexon': (800000, 1500000),
        'Harrier': (1500000, 2500000),
        'Safari': (1600000, 2700000),
        'Tiago': (500000, 800000),
        'Tigor': (600000, 900000),
        'Altroz': (600000, 1000000),
        'Punch': (600000, 1000000)
    },
    'Mahindra': {
        'XUV700': (1500000, 2500000),
        'Scorpio': (1300000, 2500000),
        'Thar': (1500000, 1700000),
        'XUV300': (800000, 1500000),
        'Bolero': (900000, 1200000),
        'Marazzo': (1200000, 1700000),
        'TUV300': (900000, 1400000)
    },
    'Kia': {
        'Seltos': (1100000, 2000000),
        'Sonet': (700000, 1400000),
        'Carnival': (2500000, 3500000),
        'EV6': (6000000, 6500000),
        'Carens': (1000000, 1900000)
    },
    'Toyota': {
        'Innova': (1800000, 3000000),
        'Fortuner': (3300000, 4500000),
        'Glanza': (600000, 900000),
        'Urban Cruiser': (900000, 1400000),
        'Camry': (4000000, 4500000),
        'Vellfire': (8000000, 10000000)
    },
    'Honda': {
        'City': (1200000, 1800000),
        'Amaze': (700000, 1100000),
        'WR-V': (900000, 1300000),
        'Jazz': (800000, 1100000),
        'Civic': (1800000, 2300000),
        'CR-V': (3000000, 3500000)
    },
    'Volkswagen': {
        'Polo': (700000, 1200000),
        'Vento': (900000, 1400000),
        'Taigun': (1100000, 1900000),
        'Virtus': (1200000, 1900000),
        'Tiguan': (2800000, 3500000)
    },
    'Skoda': {
        'Kushaq': (1100000, 1900000),
        'Slavia': (1100000, 1900000),
        'Octavia': (3000000, 3500000),
        'Superb': (3500000, 4000000),
        'Kodiaq': (3500000, 4000000)
    },
    'Renault': {
        'Kiger': (600000, 1100000),
        'Triber': (600000, 900000),
        'Duster': (1000000, 1600000),
        'Kwid': (400000, 600000)
    },
    'MG': {
        'Hector': (1500000, 2500000),
        'Astor': (1200000, 2200000),
        'Gloster': (3000000, 4000000),
        'ZS EV': (2200000, 2700000),
        'Comet EV': (800000, 1000000)
    },
    'BMW': {
        '3 Series': (4500000, 6500000),
        '5 Series': (6500000, 7500000),
        '7 Series': (15000000, 20000000),
        'X1': (4000000, 5000000),
        'X3': (6000000, 7000000),
        'X5': (8000000, 10000000),
        'X7': (10000000, 13000000)
    },
    'Mercedes': {
        'A-Class': (4000000, 5000000),
        'C-Class': (5500000, 6500000),
        'E-Class': (7000000, 8500000),
        'S-Class': (15000000, 20000000),
        'GLA': (4500000, 5500000),
        'GLC': (6000000, 7500000),
        'GLE': (8000000, 10000000),
        'GLS': (10000000, 13000000)
    },
    'Audi': {
        'A3': (3500000, 4500000),
        'A4': (4500000, 5500000),
        'A6': (6000000, 7500000),
        'A8': (12000000, 15000000),
        'Q3': (4000000, 5000000),
        'Q5': (6000000, 7500000),
        'Q7': (8000000, 10000000),
        'e-tron': (10000000, 12000000)
    }
}

# Segment classification for models
model_segments = {
    'Budget': ['Alto', 'Kwid', 'S-Presso', 'Celerio', 'WagonR', 'Tiago', 'Punch', 'Swift', 'Dzire', 'Baleno', 'i20', 'Venue', 'Sonet', 'Glanza', 'Amaze', 'Polo', 'Vento', 'Kiger', 'Triber', 'Ignis', 'Grand i10'],
    'Mid-range': ['Brezza', 'Nexon', 'Altroz', 'XUV300', 'Seltos', 'Carens', 'Taigun', 'Virtus', 'Kushaq', 'Slavia', 'City', 'WR-V', 'Ciaz', 'Elantra', 'Rapid', 'Duster', 'Hector', 'Astor', 'Compass'],
    'Premium': ['Creta', 'Verna', 'Alcazar', 'Tucson', 'Harrier', 'Safari', 'XUV700', 'Scorpio', 'Thar', 'Gloster', 'Tiguan', 'Octavia', 'Superb', 'Camry', 'Fortuner', 'CR-V', 'Civic', 'Corolla', 'Kodiaq'],
    'Luxury': ['3 Series', '5 Series', '7 Series', 'X1', 'X3', 'X5', 'X7', 'A-Class', 'C-Class', 'E-Class', 'S-Class', 'GLA', 'GLC', 'GLE', 'GLS', 'A3', 'A4', 'A6', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron', 'Vellfire']
}

# Depreciation rates by vehicle age (annual)
depreciation_rates = {
    1: 0.15,   # 15% in first year
    2: 0.10,   # 10% in second year
    3: 0.10,   # 10% in third year
    4: 0.10,   # 10% in fourth year
    5: 0.10,   # 10% in fifth year
    6: 0.08,   # 8% from 6th year onward
    7: 0.08,
    8: 0.08,
    9: 0.08,
    10: 0.08,
    11: 0.08,
    12: 0.08,
    13: 0.08,
    14: 0.08,
    15: 0.08
}

# Mileage adjustment factors (km/year)
mileage_factors = {
    'Budget': 15000,
    'Mid-range': 12000,
    'Premium': 10000,
    'Luxury': 8000
}

# Damage multipliers based on damage type
damage_multipliers = {
    'Total Loss': 0.7,
    'Accident': 0.4,
    'Natural Calamity': 0.6,
    'Theft': 0.8,
    'Fire': 0.9,
    'Mechanical': 0.5
}

# Part replacement costs (in INR)
part_costs = {
    'head_lamp': (3000, 20000),    # Varies by model
    'tail_lamp': (2500, 15000),
    'bumper_dent': (5000, 30000),
    'bumper_scratch': (3000, 15000),
    'door_dent': (8000, 40000),
    'door_scratch': (4000, 20000),
    'glass_shatter': (10000, 50000),
    'unknown': (10000, 100000)
}

def get_model_segment(model):
    """Determine segment based on model"""
    if pd.isna(model):
        return 'Mid-range'

    for segment, models in model_segments.items():
        if model in models:
            return segment
    # Default to Mid-range if not found
    return 'Mid-range'

def fetch_latest_prices(manufacturer, model):
    """Get latest prices from our predefined pricing with some randomization"""
    try:
        # Get the base price range
        min_price, max_price = model_pricing[manufacturer][model]

        # Add some model-specific randomization
        price_range = max_price - min_price
        min_price = max(min_price * random.uniform(0.95, 1.05), 100000)
        max_price = max(max_price * random.uniform(0.95, 1.05), min_price + price_range*0.5)

        return (int(min_price), int(max_price))
    except KeyError:
        # If model not found, estimate based on segment
        segment = get_model_segment(model)
        if segment == 'Luxury':
            return (3000000, 10000000)
        elif segment == 'Premium':
            return (1500000, 4000000)
        elif segment == 'Mid-range':
            return (800000, 2000000)
        else:  # Budget
            return (400000, 1000000)

def enhance_part_costs():
    """Enhance part costs with more detailed breakdown"""
    enhanced_parts = {
        'engine': {
            'Budget': (50000, 150000),
            'Mid-range': (100000, 300000),
            'Premium': (300000, 600000),
            'Luxury': (500000, 2000000)
        },
        'transmission': {
            'Budget': (30000, 80000),
            'Mid-range': (60000, 150000),
            'Premium': (150000, 350000),
            'Luxury': (300000, 800000)
        },
        'head_lamp': {
            'Budget': (3000, 8000),
            'Mid-range': (5000, 15000),
            'Premium': (10000, 25000),
            'Luxury': (15000, 50000)
        },
        'tail_lamp': {
            'Budget': (2500, 7000),
            'Mid-range': (4000, 12000),
            'Premium': (8000, 20000),
            'Luxury': (12000, 40000)
        },
        'bumper': {
            'Budget': (5000, 15000),
            'Mid-range': (8000, 25000),
            'Premium': (15000, 40000),
            'Luxury': (25000, 100000)
        },
        'door': {
            'Budget': (8000, 20000),
            'Mid-range': (12000, 35000),
            'Premium': (20000, 60000),
            'Luxury': (40000, 150000)
        },
        'windshield': {
            'Budget': (5000, 15000),
            'Mid-range': (10000, 30000),
            'Premium': (20000, 50000),
            'Luxury': (30000, 100000)
        }
    }
    return enhanced_parts

# Update the part costs with enhanced version
enhanced_part_costs = enhance_part_costs()

def calculate_engine_damage(model_segment, damage_subtype):
    """Calculate engine-specific damage costs"""
    cost_range = enhanced_part_costs['engine'][model_segment]

    if 'complete' in str(damage_subtype).lower():
        return random.randint(cost_range[0], cost_range[1])
    elif 'partial' in str(damage_subtype).lower():
        return random.randint(cost_range[0], cost_range[1]) // 2
    else:
        return cost_range[0]  # Minimum engine repair cost

def calculate_transmission_damage(model_segment, damage_subtype):
    """Calculate transmission repair costs"""
    cost_range = enhanced_part_costs['transmission'][model_segment]

    if 'complete' in str(damage_subtype).lower():
        return cost_range[1]  # Max cost for full replacement
    elif 'rebuild' in str(damage_subtype).lower():
        return random.randint(cost_range[0], cost_range[1]//2)
    else:
        return cost_range[0]  # Minimum repair cost

def calculate_depreciation(row, base_value):
    """Calculate depreciation based on vehicle age"""
    try:
        reg_year = int(row['Registration_Year'])
        accident_date = datetime.strptime(row['Accident_Date'], '%Y-%m-%d').year
    except:
        # Default to 3 years if date parsing fails
        reg_year = 2018
        accident_date = 2021

    age = accident_date - reg_year

    if age < 1:
        age = 1
    elif age > 15:
        age = 15

    remaining_value = base_value

    for year in range(1, age + 1):
        rate = depreciation_rates.get(year, 0.08)
        remaining_value *= (1 - rate)

    total_depreciation = base_value - remaining_value
    depreciation_rate = total_depreciation / base_value

    return depreciation_rate, remaining_value

def calculate_mileage(row):
    """Calculate realistic mileage based on age and segment"""
    try:
        reg_year = int(row['Registration_Year'])
        accident_date = datetime.strptime(row['Accident_Date'], '%Y-%m-%d').year
    except:
        reg_year = 2018
        accident_date = 2021

    age = accident_date - reg_year
    if age < 1:
        age = 1

    model = row['Model']
    segment = get_model_segment(model)
    km_per_year = mileage_factors.get(segment, 12000)

    base_mileage = age * km_per_year

    # Add random variation (+/- 20%)
    variation = random.uniform(0.8, 1.2)
    mileage = int(base_mileage * variation)

    # Ensure luxury cars don't have extremely high mileage
    if segment == 'Luxury' and mileage > 150000:
        mileage = random.randint(30000, 150000)

    return mileage

def calculate_enhanced_damage(row, remaining_value):
    """Enhanced damage calculation with more part-specific logic"""
    damage_type = row['Damage_Type']
    damage_subtype = str(row['Damage_Subtype']).lower()
    damaged_part = str(row['Damaged_Part']).lower()
    model = row['Model']
    model_segment = get_model_segment(model)

    if damage_type == 'Total Loss':
        return remaining_value * random.uniform(0.7, 0.9)

    # Handle specific part damages
    if 'engine' in damaged_part:
        return calculate_engine_damage(model_segment, damage_subtype)
    elif 'transmission' in damaged_part:
        return calculate_transmission_damage(model_segment, damage_subtype)
    elif any(part in damaged_part for part in ['headlamp', 'head_lamp']):
        cost_range = enhanced_part_costs['head_lamp'][model_segment]
        return random.randint(cost_range[0], cost_range[1])
    elif 'tail_lamp' in damaged_part:
        cost_range = enhanced_part_costs['tail_lamp'][model_segment]
        return random.randint(cost_range[0], cost_range[1])
    elif 'bumper' in damaged_part:
        cost_range = enhanced_part_costs['bumper'][model_segment]
        return random.randint(cost_range[0], cost_range[1])
    elif 'door' in damaged_part:
        cost_range = enhanced_part_costs['door'][model_segment]
        return random.randint(cost_range[0], cost_range[1])
    elif any(part in damaged_part for part in ['glass', 'windshield']):
        cost_range = enhanced_part_costs['windshield'][model_segment]
        return random.randint(cost_range[0], cost_range[1])
    elif 'unknown' in damaged_part:
        # Estimate based on damage type
        multiplier = damage_multipliers.get(damage_type, 0.5)
        return remaining_value * multiplier * random.uniform(0.1, 0.3)
    else:
        # Fallback to standard calculation
        part_cost = calculate_part_cost(damaged_part, model_segment)
        labor_cost = part_cost * random.uniform(0.3, 0.7)
        return part_cost + labor_cost

def calculate_part_cost(damaged_part, model_segment):
    """Calculate part replacement cost based on segment"""
    if pd.isna(damaged_part) or damaged_part not in part_costs:
        damaged_part = 'unknown'

    min_cost, max_cost = part_costs[damaged_part]

    # Adjust for segment
    if model_segment == 'Luxury':
        cost = random.randint(max_cost, max_cost * 3)
    elif model_segment == 'Premium':
        cost = random.randint((min_cost + max_cost)//2, max_cost * 2)
    else:
        cost = random.randint(min_cost, max_cost)

    return cost

def calculate_payout(row, estimated_damage):
    """Calculate realistic payout amount"""
    if row['Claim_Status'] != 'Approved':
        return 0

    # Base settlement ratio based on policy type
    if row['Policy_Type'] == 'Zero Depreciation':
        base_ratio = random.uniform(0.85, 1.0)
    elif row['Policy_Type'] == 'Comprehensive':
        base_ratio = random.uniform(0.75, 0.9)
    else:  # Third-party or others
        base_ratio = random.uniform(0.6, 0.8)

    # Adjust for damage type
    if row['Damage_Type'] == 'Total Loss':
        base_ratio *= random.uniform(0.9, 1.0)
    elif row['Damage_Type'] == 'Fire':
        base_ratio *= random.uniform(0.8, 1.0)

    payout = estimated_damage * base_ratio

    # Ensure payout doesn't exceed IDV (Insured Declared Value)
    if 'IDV' in row and not pd.isna(row['IDV']):
        if payout > row['IDV']:
            payout = row['IDV'] * random.uniform(0.8, 0.95)

    # Add some random variation
    payout *= random.uniform(0.95, 1.05)

    return round(payout)

def correct_row_enhanced(row):
    """Enhanced function to correct all data in a row"""
    try:
        # Skip if manufacturer is still missing
        if pd.isna(row['Manufacturer']):
            return row

        # Calculate realistic base value using latest prices
        manufacturer = row['Manufacturer']
        model = row['Model']
        min_price, max_price = fetch_latest_prices(manufacturer, model)
        base_value = random.randint(min_price, max_price)
        row['Corrected_Base_Value'] = base_value

        # Calculate depreciation and remaining value
        depreciation_rate, remaining_value = calculate_depreciation(row, base_value)
        row['Depreciation_Rate'] = depreciation_rate

        # Calculate realistic mileage
        corrected_mileage = calculate_mileage(row)
        row['Corrected_Mileage'] = corrected_mileage

        # Calculate estimated damage using enhanced method
        estimated_damage = calculate_enhanced_damage(row, remaining_value)
        row['Corrected_Estimated_Damage'] = round(estimated_damage)

        # Calculate payout with more realistic factors
        payout = calculate_payout(row, estimated_damage)
        row['Corrected_Payout'] = payout

        # Update settlement ratio
        if estimated_damage > 0:
            row['Settlement_Ratio'] = payout / estimated_damage

        # Ensure IDV is realistic (90-95% of depreciated value)
        row['IDV'] = round(remaining_value * random.uniform(0.9, 0.95))

        # Update segment based on model
        row['Segment'] = get_model_segment(model)

    except Exception as e:
        print(f"Error processing row {row.name}: {str(e)}")
        # Set default values if error occurs
        row['Corrected_Base_Value'] = 1000000
        row['Depreciation_Rate'] = 0.5
        row['Corrected_Mileage'] = 50000
        row['Corrected_Estimated_Damage'] = 100000
        row['Corrected_Payout'] = 80000
        row['Settlement_Ratio'] = 0.8

    return row

# Apply enhanced corrections to all rows
print("Starting enhanced data correction...")
tqdm.pandas()
df = df.progress_apply(correct_row_enhanced, axis=1)

# Add additional calculated columns
df['Age_At_Claim'] = pd.to_datetime(df['Accident_Date']).dt.year - df['Registration_Year']

df['Age_At_Claim'] = df['Age_At_Claim'].clip(lower=1)
df['Mileage_Per_Year'] = df['Corrected_Mileage'] / df['Age_At_Claim']

# Calculate claim severity
df['Claim_Severity'] = df['Corrected_Estimated_Damage'] / df['Corrected_Base_Value']

# Categorize claim severity
def categorize_severity(ratio):
    if ratio > 0.7: return 'Total Loss'
    elif ratio > 0.3: return 'Major Damage'
    elif ratio > 0.1: return 'Moderate Damage'
    else: return 'Minor Damage'

df['Severity_Category'] = df['Claim_Severity'].apply(categorize_severity)

# Final cleaning of columns
final_columns = [
    'Claim_ID', 'Registration_Date', 'Registration_Year', 'Accident_Date',
    'Vehicle_Age_Years', 'Age_At_Claim', 'Manufacturer', 'Model', 'Segment',
    'Corrected_Mileage', 'Mileage_Per_Year', 'IDV', 'Damage_Type',
    'Damage_Subtype', 'Damaged_Part', 'Accident_Location', 'Insurer',
    'Policy_Type', 'Add_On_Coverage', 'Corrected_Base_Value',
    'Depreciation_Rate', 'Corrected_Estimated_Damage', 'Claim_Severity',
    'Severity_Category', 'Deductible', 'Claim_Status', 'Corrected_Payout',
    'Processing_Time_Days', 'Settlement_Ratio'
]

df = df[final_columns]

# Save the final enhanced dataset
output_file = 'realistic_insurance_claims_final.csv'
df.to_csv(output_file, index=False)
print(f"\nEnhanced data correction complete. Saved to {output_file}")
print(f"Final dataset contains {len(df)} records with {len(df.columns)} columns each.")

# Generate summary statistics
print("\nSummary Statistics:")
print(f"- Average Base Value: ₹{df['Corrected_Base_Value'].mean():,.0f}")
print(f"- Average Claim Amount: ₹{df['Corrected_Estimated_Damage'].mean():,.0f}")
print(f"- Average Payout: ₹{df['Corrected_Payout'].mean():,.0f}")
print("\nSeverity Distribution:")
print(df['Severity_Category'].value_counts(normalize=True).apply(lambda x: f"{x:.1%}"))

# Show sample of corrected data
print("\nSample of corrected data:")
print(df.head())
