#user create a blog with a title and body of text

require 'rails_helper'

RSpec.describe  'create a blog entry', js: true do
  it 'directs to an articles page page from landing page' do
    When "visit the app" do
      #visit the app
    visit root_path
    end

    Then "see a new article link" do
    # click new article
    expect(page).to have_text('New article')
    end

    When "user clicks the line" do
    click_link('New article')
    end

    Then "user sucessfully navigates to a new blog entry" do
    #confirm page location as articles/new
    pp page.current_url
    expect((page.current_url).last(13),
    ).to eq '/articles/new'
    end
  end
end