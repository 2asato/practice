# 100.times { |num| p num }
# arr = [3, 5, 6, 1, 5]
# arr.length.times { |num| p arr[num] }

# words = ['the', 'cat', 'in', 'the', 'hat']
# words.each { |current_word| p current_word.upcase }

# words = ['the', 'cat', 'in', 'the', 'hat']
#
# words.each do |w|
#   if w == 'cat'
# 	p w
#   elsif w == 'hat'
#   	p w.upcase
#   else
#    p 'neither cat nor hat'
#   end
# end

books = [
	{ title: 'Madame Bovary', author: 'Gustave Flaubert' },
	{ title: 'Gravity\'s Rainbow', author: 'Thomas Pynchon' },
	{ title: 'Silence', author: 'Shusaku Endo' },
	{ title: 'Radio Free Albemuth', author: 'Philip K Dick' },
	{ title: 'The Goldfinch', author: 'Donna Tartt' },
	{ title: 'Pilgrim at Tinker Creek', author: 'Annie Dillard' },
	{ title: 'Too Much Happiness', author: 'Alice Munro' }
]

books.each do |book|
  if book[:title].length > 15
    p book[:title]
  else
    p 'title length not greater than 15 chars'
  end
end
