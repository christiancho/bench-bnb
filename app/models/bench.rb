# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base

  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    top = bounds["northEast"]["lat"];
    right = bounds["northEast"]["lng"];
    bottom = bounds["southWest"]["lat"];
    left = bounds["southWest"]["lng"];
    Bench.where('lat < ? AND lat > ? AND lng > ? AND lng < ?', top, bottom, left, right)
  end

end
