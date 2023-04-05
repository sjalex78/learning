#!/usr/bin/env ruby
# frozen_string_literal: true

$LOAD_PATH << File.join(File.dirname(__FILE__), '../lib')

require 'mirror'

puts Mirror.reverse(ARGV.join)
