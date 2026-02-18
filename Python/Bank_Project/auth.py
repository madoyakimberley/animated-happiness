from decorators import log
from time import sleep
from account import get_account_by_id_no

# think about how we deactivate an account
# Try implementing that
# Instead of recussion: for or while

@log
def login(attempts=0, account_attempts=1):

    if attempts >= 4:
        print("Maximum attempts reached")
        print("Account locked. Contact Customer service")
        return None

    id_no = input("Enter your id no: ")

    account = get_account_by_id_no(id_no)
    # Denial of service
    if not account:
        seconds = account_attempts
        print(f"... Waiting for next login {seconds} seconds")
        sleep(seconds)
        login(attempts=attempts, account_attempts=account_attempts+2)
        # DOS -> Denial of service of service
        return None

    print("Bank login process")
    print("Attempt no", attempts)
    password = input("Enter account password: ")

    if account["password"] != password:
        print("Invalid Password or account")
        new_attempts = attempts + 1
        login(id_no=id_no, attempts=new_attempts)
        return

    print("———————Welcome———————")
    print(f"{account['name']}")
    print("———————Welcome———————")

    return True

login()