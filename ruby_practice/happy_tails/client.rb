class Client

  attr_accessor :name, :residence, :pet

  def initialize name, residence
    @name = name
    @residence = residence
    @pets = []
  end

  def get_pet pet
    @pets << pet
  end

end

client1 = Client.new "Joni", "Shoreline"
client1.get_pet "Noodle"
p client1
