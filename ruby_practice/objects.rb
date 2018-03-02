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

  def initialize name, shape
    @shape = shape
    @name = name
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

  def populate name, age
    @people << { name: name, age: age }
  end
  
end

# world1 = World.new
#
# p world1.people
#
# world1.populate
# world1.populate
# world1.populate
#
# p world1.people

# world1 = World.new "Panthalassa"
# world2 = World.new "Booger-town"
world3 = World.new "Spiky hair ville"
# world4 = World.new "Frosted tips ville"

world3.populate "Bart Simpson", 10
p world3.people
