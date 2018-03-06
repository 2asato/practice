require_relative "animal"
require_relative "client"
require_relative "shelter"

shelter = Shelter.new "Happy Tails"

animal1 = Animal.new "Noodle", "Dog"
shelter.add_animal animal1
animal2 = Animal.new "Cleo", "Dog"
shelter.add_animal animal2
animal3 = Animal.new "Millie", "Dog"
shelter.add_animal animal3

client1 = Client.new "Joni", "Shoreline"
shelter.add_client client1
client2 = Client.new "Adam", "Shoreline"
shelter.add_client client2
client3 = Client.new "Bella", "Burien"
shelter.add_client client3

loop do
  puts "Welcome to Happy Tails!"
  puts "Please choose one of the following..."
  puts "(1) add an animal"
  puts "(2) create a client profile"
  puts "(3) view all animals"
  puts "(4) view all clients"
  puts "(q) Quit"
  choice = gets.chomp
  if choice == "1"
    puts "Enter animal's name"
    name = gets.chomp
    puts "Enter animal's species"
    species = gets.chomp
    new_animal = Animal.new name, species
    p new_animal
    shelter.add_animal new_animal
    p shelter
  elsif choice == "2"
    puts "Enter client's name"
    name = gets.chomp
    puts "Enter client's city"
    city = gets.chomp
    new_client = Client.new name, city
    p new_client
    shelter.add_client new_client
    p shelter
  elsif choice == "3"
    shelter.animals.each do |x|
      p "Name: #{x.name}  Species: #{x.species}"
    end
  elsif choice == "4"
    shelter.clients.each do |x|
      p "Name: #{x.name}  City: #{x.city}"
    end
  elsif choice == "q"
    puts "Thanks for visiting Happy Tails! Please come back soon!"
    exit
  else
    puts "Invalid entry, please try again"
  end
end
