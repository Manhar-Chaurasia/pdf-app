#PDF List App
This is a simple web application that allows users to view and search a list of PDF documents. The app fetches PDF data from an external API and displays it in a user-friendly interface. Users can search through the list of PDFs by title and view more details by clicking on individual items.

#Features
 -Search Functionality: Filter PDFs by name using the search bar.
 -Dynamic Card Display: PDFs are displayed as cards with information like title and author.
 -Responsive Design: The app is responsive and works well on different screen sizes.

#Technologies Used
 -React: Frontend library for building the UI.
 -React Router: Used for routing between pages.
 -CSS: For styling the components.

#Setup and Installation
1) Clone the repository:
git clone <repository_url>

2) Navigate to the project directory:
cd pdf-list-app

3) Install the dependencies:
npm install

4) Start the development server:
npm start

#API
The app fetches PDF data from the following endpoint:
https://api.npoint.io/dee51ea017d20efdfcc8

#The data includes:
name: Title of the PDF.
author: Author of the PDF.
link: Link to the PDF.