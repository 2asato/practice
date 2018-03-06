require_relative "animal"
require_relative "client"
require_relative "shelter"

shelter = Shelter.new "Happy Tails"

animal1 = Animal.new "Noodle", "Dog"
animal2 = Animal.new "Cleo", "Dog"
animal3 = Animal.new "Millie", "Dog"

client1 = Client.new "Joni", "Shoreline"
client2 = Client.new "Adam", "Shoreline"
client3 = Client.new "Bella", "Burien"

loop do
  puts "Welcome to Happy Tails!"
  puts "Please choose one of the following..."
  puts "(1) add an animal"
  puts "(2 create a client profile)"
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
  elsif choice == "q"
    puts "Thanks for visiting Happy Tails! Please come back soon!"
    exit
  else
    puts "Invalid entry, please try again"
  end
end
