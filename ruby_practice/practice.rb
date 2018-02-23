# hi = "Hello World"
# adjective = "Big Bad"
# p "Hello #{adjective} World"
# p hi.upcase

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
# p nums.push
# p nums.pop
# p nums.length
# p nums.include? 8

# colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
# p colors.sample
# p colors.reverse
# p colors.map(&:upcase)

# def find_area height, width
#   height * width
# end
# p find_area 9, 4

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
#
# def multiply_each_by_five arr
#   arr.each {|x| p x * 5}
# end
# multiply_each_by_five nums

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

# def print_price hash
#   p hash[:price]
# end
# print_price lamp

# def print_item_sums hash1, hash2
#   p hash1[:price] + hash2[:price]
# end
# print_item_sums table, lamp

# def check_if_prime num
#   Prime.prime?(num)
# end
# check_if_prime 2

def sum_of_multiples_3_5 maximum
  (1...maximum).reduce(0) { |total,i| total + ((i % 3 == 0 || i % 5 == 0) ? i : 0)}
end
p sum_of_multiples_3_5 10
