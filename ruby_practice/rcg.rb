# # puts "Write something: "
# # input = gets
# # puts "You wrote: #{input}"
#
# dictionary = ["potato", "honey", "tea", "rice", "quinoa"]
# word = dictionary.sample
# # p word
# puts "Guess which word I secretly chose!"
# puts "The word has #{word.length} letters."
#
# input = gets.chomp
#
# if input == word
#   puts "Yep. You got it.  The word was #{word}."
# else
#   puts "WRONG"
#   puts "(t)ry again or (q)uit?"
#   again = gets.chomp.downcase
#   if again == "q" then puts "ok"
#   end
# end

# class Muppet
#
#   Color = ["red", "blue", "green", "orange"]
#   def initialize name
#     p "This muppet is called #{name}!"
#     @name = name
#     @color = Color.sample
#   end
#
#   def name
#     @name
#   end
#
#   def color
#     @color
#   end
#
#
# end
#
# muppet1 = Muppet.new "Fonzy"
# p muppet1
# p muppet1.name
# p muppet1.color

# class Bird
#
#   Species = ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross', 'Ruddy Turnstone', 'Piping Plover', 'Killdeer', 'Laughing Gull', 'Marbled Godwit', 'Least Tern', 'New World Warbler']
#
#   def initialize adjective, name
#     p "#{name} is a(n) #{adjective} bird!"
#     @name = name
#     @adjective = adjective
#     @species = Species.sample
#   end
#
#   def adjective
#     @adjective
#   end
#
#   def name
#     @name
#   end
#
#   def species
#     @species
#   end
#
#   def honk
#     p "#{name} is making a honking sound!"
#   end
#
#   def flail
#     p "#{name} is flailing its arms!"
#   end
#
# end
#
# bird1 = Bird.new "big", "Big Bird"
# p bird1
# bird1.honk
# bird1.flail
# p bird1.adjective
# p bird1.name

class Person

  def initialize name, age
    p "#{name} is #{age} years old."
    @name = name
    @age = age
  end

  def name
    @name
  end

  def age
    @age
  end

end

class World
  People = []
  def name
    'Panthalassa'
  end

  def populate
    People.push(Person)
  end

end

person1 = Person.new "Teyo", 5

p person1

p People
