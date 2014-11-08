class HomeController < ApplicationController
  def index
    @planet = Planet.all.sample
  end
end
