def check_the_magic (**kwargs):
     print(f"The data type is: {type(kwargs)}")
     print(f"The content is: {kwargs}")
     print(f"Location is :",{kwargs["location"]})

def check_the_magic2(name,age,location):
     print(f"name",name)
     print(f"age",age)
     print(f"location",location)

check_the_magic(location="Kenya", pet="Cat", hobby="Coding")
