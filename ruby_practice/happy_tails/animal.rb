class Animal

  attr_accessor :name, :species, :toy

  def initialize name, species
    @name = name
    @species = species
    @toys = []
  end

  def get_toy toy
    @toys << toy
  end

end

animal1 = Animal.new "Stripes", "Zebra"
p animal1.name
animal1.get_toy "bone"
animal1.get_toy "rope"
p animal1
