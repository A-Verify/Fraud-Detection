# Fraud Detection System for E-commerce and Banking Transactions

## 📊 Project Overview
A comprehensive machine learning solution for detecting fraudulent transactions in e-commerce and banking systems. This project addresses the critical challenge of class imbalance while balancing security requirements with user experience.

### 🎯 Business Impact
- **Financial Loss Prevention**: Early detection of fraudulent transactions
- **Customer Trust**: Reduced false positives maintain positive user experience  
- **Operational Efficiency**: Automated monitoring reduces manual review workload
- **Compliance**: Enhanced ability to meet regulatory requirements

## 📁 Project Structure
```
fraud-detection/
├── data/
│   ├── raw/                      # Original datasets
│   │   ├── Fraud_Data.csv
│   │   ├── IpAddress_to_Country.csv
│   │   └── creditcard.csv
│   └── processed/                # Cleaned and feature-engineered data
├── notebooks/
│   ├── task1_data_preprocessing.ipynb
│   ├── task2_model_building.ipynb
│   ├── task3_model_explainability.ipynb
│   └── visualizations/           # EDA and model performance plots
├── models/                       # Saved model artifacts
├── src/                          # Source code modules
├── tests/                        # Unit tests
├── requirements.txt              # Python dependencies
└── README.md                     # This file
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip package manager

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/fraud-detection.git
cd fraud-detection
```

2. Create and activate virtual environment:
```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Download datasets and place in `data/raw/`:
   - `Fraud_Data.csv` (e-commerce transactions)
   - `IpAddress_to_Country.csv` (IP-country mapping)
   - `creditcard.csv` (banking transactions)

### Running the Project
Execute tasks in order:

1. **Task 1 - Data Preprocessing**:
```bash
jupyter notebook notebooks/task1_data_preprocessing.ipynb
```

2. **Task 2 - Model Building**:
```bash
jupyter notebook notebooks/task2_model_building.ipynb
```

3. **Task 3 - Model Explainability**:
```bash
jupyter notebook notebooks/task3_model_explainability.ipynb
```

## 📋 Project Tasks

### Task 1: Data Analysis and Preprocessing ✅
**Objective**: Prepare clean, feature-rich datasets ready for modeling

**Key Activities**:
- ✅ Data cleaning and missing value handling
- ✅ Exploratory Data Analysis (EDA) with visualizations
- ✅ Geolocation integration (IP to country mapping)
- ✅ Feature engineering: time-based and behavioral features
- ✅ Class imbalance handling (3:1 balanced dataset)
- ✅ Data transformation and encoding

**Outputs**:
- Processed datasets in `data/processed/`
- EDA visualizations in `notebooks/visualizations/`
- Feature list and summary statistics

### Task 2: Model Building and Training ✅
**Objective**: Build, train, and evaluate classification models for fraud detection

**Key Activities**:
- ✅ Train baseline model (Logistic Regression with class weights)
- ✅ Train ensemble models (Random Forest, XGBoost)
- ✅ Hyperparameter tuning and cross-validation
- ✅ Performance evaluation using AUC-PR, F1-Score
- ✅ Model comparison and selection

**Models Trained**:
1. **Logistic Regression** (Baseline interpretable model)
2. **Random Forest** (Best performing ensemble)
3. **XGBoost** (Alternative gradient boosting)

**Performance Metrics**:
- **Primary**: AUC-PR (Precision-Recall AUC)
- **Secondary**: F1-Score, Precision, Recall, ROC-AUC
- **Business**: False Positive Rate, Detection Rate

**Outputs**:
- Trained models in `models/` directory
- Performance visualizations
- Cross-validation results
- Model comparison report

### Task 3: Model Explainability ✅
**Objective**: Interpret model predictions and provide actionable business insights

**Key Activities**:
- ✅ Feature importance analysis (built-in and SHAP)
- ✅ Individual case analysis (True/False Positives/Negatives)
- ✅ Top fraud drivers identification
- ✅ Business recommendations generation
- ✅ Model interpretation summary

**Top 5 Fraud Drivers Identified**:
1. **`is_immediate_purchase`** (54.6% fraud vs 0.02% legitimate)
2. **`is_shared_device`** (70.9% fraud vs 5.9% legitimate)  
3. **`time_since_signup_hours`** (Negative for fraud, positive for legitimate)
4. **`device_usage_count`** (Higher for fraudulent devices)
5. **`source_Ads`** (Minimal discrimination but in top 5)

**Business Recommendations**:
1. **HIGH**: Implement "First Hour Rule" for new accounts
2. **HIGH**: Deploy device fingerprinting system
3. **HIGH**: Enhanced monitoring for accounts <24 hours old
4. **MEDIUM**: Device velocity monitoring
5. **MEDIUM**: Dynamic risk scoring implementation

**Outputs**:
- Feature importance visualizations
- Individual case analyses
- Business recommendations report
- Complete model interpretation documentation

## 🎯 Key Results

### Model Performance
- **Best Model**: Random Forest
- **AUC-PR**: Excellent performance on imbalanced data
- **Top 5 Features Account for**: 94.8% of total importance
- **Fraud Detection Rate**: Optimized for business needs
- **False Positive Rate**: Minimized to maintain user experience

### Critical Insights
1. **Immediate purchases** are the strongest fraud indicator (54.6% vs 0.02%)
2. **Shared devices** increase fraud risk 12x
3. **Behavioral patterns** outperform demographic features
4. **Time-based features** are highly predictive
5. **Feature engineering** significantly improved model performance

## 💼 Business Implementation

### Immediate Actions
1. **Deploy "First Hour Rule"**: Block/verify purchases within 1 hour of account creation
2. **Implement device tracking**: Flag shared devices for additional verification
3. **New account monitoring**: Enhanced scrutiny for first 24 hours

### Medium-term Roadmap
1. **Real-time scoring**: Integrate model into transaction processing
2. **Continuous monitoring**: Set up model performance tracking
3. **Periodic retraining**: Schedule model updates with new data

## 📊 Technical Stack

### Core Libraries
- **Data Processing**: pandas, numpy
- **Machine Learning**: scikit-learn, XGBoost
- **Visualization**: matplotlib, seaborn
- **Model Explainability**: SHAP (optional)

### Development Tools
- **Environment**: Jupyter Notebooks
- **Version Control**: Git
- **Package Management**: pip

## 🔧 Customization

### Adding New Features
1. Add feature engineering steps in `task1_data_preprocessing.ipynb`
2. Update feature selection in modeling tasks
3. Retrain models and evaluate performance

### Modifying Models
1. Edit hyperparameters in `task2_model_building.ipynb`
2. Add new algorithms to the model comparison
3. Update evaluation metrics as needed

### Deployment Considerations
1. Export final model using `joblib` or `pickle`
2. Create API wrapper for real-time predictions
3. Implement monitoring and logging

## 📈 Performance Monitoring

### Key Metrics to Track
1. **Model Performance**: AUC-PR, F1-Score, Precision, Recall
2. **Business Impact**: Fraud prevented, false positives, customer complaints
3. **Operational**: Prediction latency, system uptime

### Retraining Schedule
- **Weekly**: Update with new transaction data
- **Monthly**: Full retraining with updated features
- **Quarterly**: Model architecture review

## 🚨 Troubleshooting

### Common Issues
1. **Memory errors**: Use data sampling or chunk processing
2. **Slow training**: Reduce feature count or use faster algorithms
3. **Poor performance**: Check class imbalance handling
4. **Missing data**: Review preprocessing steps

### Getting Help
- Check `notebooks/` for detailed implementation
- Review generated visualizations for insights
- Refer to model metadata in `models/` directory

## 📚 References

### Datasets
1. Kaggle: Credit Card Fraud Dataset
2. Kaggle: Fraud E-commerce Dataset
3. IEEE Fraud Detection Competition

### Techniques
1. Handling Imbalanced Data (SMOTE, class weights)
2. Model Explainability (SHAP, LIME)
3. Feature Engineering for Fraud Detection

### Business Context
1. Fraud Detection in Financial Services
2. Balancing Security and User Experience
3. Real-time Transaction Monitoring

## 👥 Team
- **Data Scientists**: Kaleb Menbere
- **Institution**: Adey Innovations Inc.

## 📅 Timeline
- **Start Date**: December 2025
- **Task 1 Completion**: December 21, 2025
- **Task 2 Completion**: December 28, 2025  
- **Final Submission**: December 30, 2025

## 📄 License
This project is proprietary and confidential. All rights reserved by Adey Innovations Inc.

## 🌟 Acknowledgments
- Dataset providers and competition hosts
- Open-source machine learning community

---

**Project Status**: ✅ Complete  
**Last Updated**: December 2025  
**Contact**: [Your Contact Information]

---

*"Advancing financial security through intelligent fraud detection"*
