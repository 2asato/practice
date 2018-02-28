class World
  def name
    @name = "Panthalassa"
  end

  def name
    @name
  end

  def name=value
    @name = value
  end

end

world1 = World.new

p world1
world1.name = "Booger-town"
p world1.name
p world1.class
