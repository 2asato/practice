# p 'Hello world'
# p 42
# p true
# p [1, 2, 3]
#
# adjective = 'cruel'
# p adjective
#
# p "Hello #{adjective} world"
#
# p adjective.reverse
# p adjective.upcase
#
# adjectives = ['cruel', 'dusty', 'ordinary']
# p "Hello #{adjectives.sample} world"

# def is_palindrome? inp
#   inp == inp.reverse
# end
#
# # p is_palindrome? 'radar'
#
# def length_five? str
#   str.length === 5
# end
# p length_five? 'five'

# def get_area length, width
#   length * width
# end
# p get_area 4, 5

# def two_strings str1, str2
#   "#{str1} and #{str2}"
# end
# p two_strings 'Bebop', 'Rocksteady'

# def minutes_to_decimal minutes
#   decimal = minutes.to_f / 60
#   "The decimal is: #{decimal}"
# end
# p minutes_to_decimal 121

# def pick_element arr, index
#   arr[index] || "out of range"
# end
# p pick_element [1, 2, 3], 4

# outside = true
#
# def scope_test
#   outside
# end
# p scope_test

# number = 64
#
# def get_root num
#   Math.sqrt num
# end
#
# def get_exp_five num
#   num ** 5
# end
#
# p get_root number
# p get_exp_five number

# def mutate str
#   str.upcase.reverse
# end
#
# def weirdify_words str
#   mutate "#{str} inner bongolia"
# end
#
# p weirdify_words 'take a trip to'

# def add_two number
#   number + 2
# end
#
# p add_two 3
# p number

# book = {
#   title: 'The Great Gatsby',
#   author: 'F Scott Fitzgerald',
#   year: 1925
# }
#
# p book

# def shuffle_keys hash
#   hash.keys.shuffle
# end
# p shuffle_keys name: "Timmy", age: 45

# def return_num_and_hash num, hash
# 	[num, hash]
# end
#
# p return_num_and_hash 5, name: "Timmy", age: 45
