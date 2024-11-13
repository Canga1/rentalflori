
# RentalFlori

RentalFlori is a web application designed to simplify car rental services. It allows users to browse available vehicles, make rental reservations, and manage bookings efficiently. This project demonstrates a full-stack approach to developing a car rental service, featuring both frontend and backend functionality.

## Project Description

RentalFlori is designed to provide a user-friendly experience for car rental bookings. Users can view available vehicles, check rental prices, and make reservations through an intuitive interface. The application is tailored to be easily manageable by the rental service provider, with features for booking management and service updates.

## Features

- **Browse Cars**: Users can view available cars, including details such as make, model, price, and availability.
- **Book a Car**: Customers can reserve cars for specific dates, subject to availability.
- **Manage Bookings**: Users can view and modify their bookings as needed.
- **Responsive Design**: The website is fully responsive for desktop and mobile views.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Django, Python
- **Database**: SQLite (can be switched to PostgreSQL for production)
- **Deployment**: Hosted on a web server, such as Heroku or a VPS (for production)

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Canga1/rentalflori.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd rentalflori
   ```
3. **Set Up a Virtual Environment** (recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scriptsctivate`
   ```
4. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
5. **Run Database Migrations**:
   ```bash
   python manage.py migrate
   ```
6. **Start the Development Server**:
   ```bash
   python manage.py runserver
   ```
7. **Visit** `http://127.0.0.1:8000` in your browser to see the application.

## Usage

After setting up the project, you can use the application as follows:

- **Explore Available Cars**: Browse the list of cars with detailed information.
- **Make a Reservation**: Choose your rental dates and reserve a vehicle.
- **Manage Reservations**: Users can view or modify their bookings.

## Screenshots

*Include screenshots of the main pages or features of the website here to give potential employers a visual understanding of the project.*

## Future Enhancements

- **User Authentication**: Add login and registration for user accounts.
- **Enhanced Admin Dashboard**: Additional features for managing vehicles, bookings, and user data.
- **Payment Integration**: Integrate payment gateways to facilitate online payments.

## Contact

For more information about this project, feel free to reach out:

**Bajram Canga**  
Email: [canga265@gmail.com](mailto:canga265@gmail.com)  
GitHub: [Canga1](https://github.com/Canga1)
