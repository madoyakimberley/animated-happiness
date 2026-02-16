def sum_receipt(*args):
    print(args)
    sum=0
    for n in args:
        print("n is :", n)
        sum += n
    print("Sum is :", sum)


def main():
    prices_list =[]

    while True:
        user_input= input("Enter a price or type 'done' to end").lower()

        if user_input == 'done':
            break
        try:
            price = float(user_input)
            prices_list.append(price)
        except Exception as e:
            print("Invalid input. Enter a number")

        print(prices_list)
    sum_receipt(*prices_list)

main()
