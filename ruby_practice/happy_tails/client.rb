class Client

  attr_accessor :name, :city, :pet

  def initialize name, city
    @name = name
    @city = city
    @pets = []
  end

  def get_pet pet
    @pets << pet
  end

end

# client1 = Client.new "Joni", "Shoreline"
# client1.get_pet "Noodle"
# p client1
