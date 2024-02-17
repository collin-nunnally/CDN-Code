"""
Name: Collin Nunnally
Class: CSE-111
Comments:
Outline gained from files in 11 Prepare .html page
"""

def main():
    try:
        # Open the file phone_numbers.txt for reading and read all of the phone numbers into a list named phone_numbers.
        phone_numbers = read_list("phone_numbers.txt")

        # Some of the phone numbers in phone_numbers.txt do not start with an area code. Replace each short phone number with a phone number that begins with the area code "208-" To do this, call the map function and pass the add_area_code function and the list of phone numbers as arguments to the map function.
        new_numbers = list(map(add_area_code, phone_numbers))

        # Print the list with the corrected phone numbers.
        print(new_numbers)

    except FileNotFoundError as not_found_err:
        print(type(not_found_err).__name__, not_found_err, sep=": ")


def add_area_code(phone_number):
    if len(phone_number) < 12:  # Check length of phone number,adds area code only if the length is less than 12
        return "208-" + phone_number
    else:
        return phone_number # Return the original phone number if it's already long enough


def read_list(filename):
    # Create an empty list named text_list.
    text_list = []

    # Open the text file for reading and store a reference to the opened file in a variable named text_file.
    with open(filename, "rt") as text_file:

        # Read the contents of the text file one line at a time.
        for line in text_file:

            # Remove white space, if there is any, from the beginning and end of the line.
            clean_line = line.strip()

            # Append the clean line of text onto the end of the list.
            text_list.append(clean_line)

    # Return the list that contains the lines of text.
    return text_list

"""
If this file is executed like this:
> python add_area_code.py
then call the main function. However, if this file is simply imported (e.g. into a test file), then skip the call to main.
"""
if __name__ == "__main__":
    main()
