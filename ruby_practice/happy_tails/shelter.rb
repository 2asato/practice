class Shelter

  attr_accessor :name

  def initialize name
    @name = name
    @animals = []
    @clients = []
  end

  def add_animal animal
    @animals << animal
  end

  def add_client client
    @clients << client
  end

  def adoption animal
    @clients << animal
  end

  def return_animal animal
    @animals << animal
  end

end
