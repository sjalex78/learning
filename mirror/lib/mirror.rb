# frozen_string_literal: true

# mirrors things like strings
class Mirror
  def self.reverse(string)
    raise ArgumentError, 'take the cloth off the mirror' if string.nil?

    string.chars.first || string
  end
end
