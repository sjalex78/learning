# PROBLEM: we want to find out if given an array of unique numbers, there is a combination of two numbers which adds up to a target number.

# make an methods that takes an array of unique numbers
# what combo of two of the numbers addes to target number?



# arr_unique_numbers =[]
# target_number =

# def sum_equal_target_number(arr_unique_numbers,target_number)
#   return true if arr_unique_numbers.empty? && target_number ==0
#   arr_unique_numbers.product(arr_unique_numbers)
# end

# puts sum_equal_target_number([2,3,4,5,6], 1)
# # puts sum_equal_target_number([], 0)


# arr_unique_numbers =[1,2,3,4,5,6]
# target_number = 6

# pp arr_unique_numbers.product(arr_unique_numbers) #.product Returns an array of all combinations of elements from all arrays.

# hash = Hash.new{|h,k| h[k] = []}
# new_array= do |h,k| h[k] = []

hash = {}


string_as_symbols = ["a", "b", "c"].map{|string| string.to_sym}
pp string_as_symbols
string_as_symbols.product([1,2,3]).each do |key, value|
   puts("in here: #{key}, #{value}")
  #  if (hash[key].nil?)
  #    hash[key] = []
  #  end
   hash[key] ||= []
  # hash[key] = [] if hash[key].nil?
   hash[key] << value

end

hash2 = [:a, :b, :c].map{|key| [key, [1,2,3]]}.to_h
pp "this one:"
pp hash2
# pp ["a","b","c"].product([1,2,3]).to_h
# hash={}
# hash[:a] = []
# hash[:a] << 1
# hash[:a] << 2
# hash[:a] << 3
# hash[:a]=[1,2,3]

pp hash

# pp ["a","b","c"].product([1,2,3]).to_h




# a = "a"

# hash = {}
# hash[:a] = 1
# hash[:a] = 2
# pp hash
# pp {:a => 1, :a => 2}
# ANSWER:
# def sum_eq_n?(arr, n)
#   return true if arr.empty? && n == 0
#   arr.product(arr).reject { |a,b| a == b }.any? { |a,b| a + b == n }
# end
