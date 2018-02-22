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

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

def multiply_each_by_five arr
  arr.each {|x| p x * 5}
end
multiply_each_by_five nums
