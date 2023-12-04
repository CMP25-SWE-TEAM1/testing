import plotly.offline as pyo
import plotly.graph_objects as go
import pandas as pd
import json
import os

# Specify the folder path
folder_path = 'User Interactions'

# Get a list of all files in the folder
file_list = os.listdir(folder_path)

# Filter only JSON files
json_files = [file for file in file_list if file.endswith('.json')]

# Initialize a list to store HTML file names
html_files = []

# Process each JSON file
for json_file in json_files:
    # Construct the full path to the JSON file
    file_path = os.path.join(folder_path, json_file)

    # Read data from the JSON file
    with open(file_path, 'r') as file:
        data = json.load(file)

    # Extracting relevant information for the bar chart
    groups = data['root_group']['groups']

    table_data = []

    for group in groups:
        group_name = group['name']
        for check in group['checks']:
            check_path = check['path']
            passes = check['passes']
            fails = check['fails']
            table_data.append([group_name, check_path, passes, fails])

    # Creating a DataFrame for the bar chart
    df = pd.DataFrame(table_data, columns=['Group', 'Path', 'Passes', 'Fails'])

    check_labels = df["Path"]
    passes = df["Passes"]
    fails = df["Fails"]

    fig = go.Figure()

    fig.add_trace(go.Bar(
        y=check_labels,
        x=passes,
        name='Passes',
        orientation='h',
        marker=dict(color='skyblue'),
        text=passes,
        textposition='outside',
        texttemplate='%{text}',
        insidetextfont=dict(size=14, color='black', family='Arial')
    ))

    fig.add_trace(go.Bar(
        y=check_labels,
        x=fails,
        name='Fails',
        orientation='h',
        marker=dict(color='salmon'),
        text=fails,
        textposition='outside',
        texttemplate='%{text}',
        insidetextfont=dict(size=14, color='black', family='Arial')
    ))

    fig.update_layout(
        title=f'Passes and Fails for each Check - {json_file}',
        xaxis=dict(title='Count'),
        yaxis=dict(title='Checks'),
        barmode='group',  # Use 'group' mode for side-by-side bars
        # Adjust the left margin to increase space between bars and text
        margin=dict(l=200)
    )

    # Save the bar chart as an HTML file
    bar_chart_html = f'fig_bar_chart_{json_file[:-5]}.html'
    pyo.plot(fig, filename=bar_chart_html, auto_open=False)
    html_files.append(bar_chart_html)

    # Extracting relevant information for the metrics table
    metrics_data = data['metrics']

    metrics_table_data = []
    for metric, values in metrics_data.items():
        if 'values' in values:
            for key, value in values['values'].items():
                metrics_table_data.append([metric, key, value])

    # Creating a DataFrame for the metrics table
    metrics_df = pd.DataFrame(metrics_table_data, columns=['Metric', 'Key', 'Value'])

    # Creating a table for the metrics
    table_fig = go.Figure(data=[go.Table(
        header=dict(values=['Metric', 'Key', 'Value']),
        cells=dict(values=[metrics_df['Metric'], metrics_df['Key'], metrics_df['Value']])
    )])

    # Update layout for the table
    table_fig.update_layout(title=f'Metrics Table - {json_file}')

    # Save the metrics table as an HTML file
    metrics_table_html = f'fig_metrics_table_{json_file[:-5]}.html'
    pyo.plot(table_fig, filename=metrics_table_html, auto_open=False)
    html_files.append(metrics_table_html)

# Combine HTML files into a single HTML file
combined_html_path = f'{folder_path}_combined_figures.html'
with open(combined_html_path, 'w') as combined_file:
    combined_file.write('<html>\n<body>\n')

    # Add the content of each HTML file
    for html_file in html_files:
        with open(html_file, 'r') as file:
            combined_file.write(file.read())

    combined_file.write('\n</body>\n</html>')

# Output the path to the combined HTML file
print(f"Combined HTML saved at: {combined_html_path}")
