from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS

app = Flask(__name__)

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'xhabrahimijulia@gmail.com'
app.config['MAIL_PASSWORD'] = 'Sara1234b'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/')
def home():
    return 'Welcome to FLORI Car Rentals Booking Service!'

@app.route('/book', methods=['POST'])
def book():
    try:
        print("Received a booking request")
        data = request.get_json()  # Ensure you're correctly parsing JSON data
        print("Booking data:", data)
        if not data:
            print("No data found in the request")
            return jsonify({"error": "No data provided"}), 400

        # Attempt to process the booking
        send_booking_confirmation(data)
        return jsonify({"message": "Booking confirmed! Email sent."}), 200
    except Exception as e:
        print("Error processing the booking:", e)
        return jsonify({"error": str(e)}), 500




def send_booking_confirmation(booking_details):
    subject = "New Car Rental Booking"
    sender = app.config['MAIL_USERNAME']
    recipients = ["xhabrahimijulia@gmail.com"]
    body = ("Booking Details:\n"
            f"Start Date: {booking_details.get('start_date')}\n"
            f"End Date: {booking_details.get('end_date')}\n"
            f"Pick-up Time: {booking_details.get('pick_up_time')}")
    
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.body = body
    mail.send(msg)

if __name__ == '__main__':
    app.run(debug=True)