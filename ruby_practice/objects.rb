# class World
#   def name
#     @name = "Panthalassa"
#   end
#
#   def name
#     @name
#   end
#
#   def name=value
#     @name = value
#   end
#
# end
#
# world1 = World.new
#
# p world1
# world1.name = "Booger-town"
# p world1.name
# p world1.class

class World

  def initialize
    @name = "Panthalassa"
    @people = []
  end

  def name
    @name
  end

  def people
    @people
  end

  def name=value
    @name = value
  end

  def populate
    @people << { name: "Lumpy", age: 20 }
  end

end

world1 = World.new

p world1.people

world1.populate
world1.populate
world1.populate

p world1.people
