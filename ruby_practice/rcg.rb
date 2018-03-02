# puts "Write something: "
# input = gets
# puts "You wrote: #{input}"

dictionary = ["potato", "honey", "tea", "rice", "quinoa"]
word = dictionary.sample
# p word
puts "Guess which word I secretly chose!"
puts "The word has #{word.length} letters."

input = gets.chomp

if input == word
  puts "Yep. You got it.  The word was #{word}."
else
  puts "WRONG"
  puts "(t)ry again or (q)uit?"
  again = gets.chomp.downcase
  if again == "q" then puts "ok"
  end
end
