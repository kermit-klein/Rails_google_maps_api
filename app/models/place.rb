class Place < ApplicationRecord
  validates_presence_of :name, :latitude, :longitude
  validates :latitude, :longitude, numericality: true
end
