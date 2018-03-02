class Animal

  Toy = ["bone", "ball", "rope", "squeak toy"]

  def initialize name, species
    @name = name
    @species = species
    @toy = Toy.sample
  end

  def name
    @name
  end

  def species
    @species
  end

  def toy
    @toy
  end

end

animal1 = Animal.new "Stripes", "Zebra"
p animal1
p animal1.name
