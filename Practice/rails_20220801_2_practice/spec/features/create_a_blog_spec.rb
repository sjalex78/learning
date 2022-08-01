#user create a blog with a title and body of text

require 'rails_helper'

feature 'creating blogs', js: true do
  scenario 'new user creates a blog post' do
    When "user visits the app" do
      visit root_path
    end

    Then "they see a new article link" do
      expect(page).to have_text('New article')
    end

    When "user clicks the link" do
      click_link('New article')
    end

    Then "user sucessfully navigates to a new blog entry" do
      expect(
        (page.current_url).last(13),
      ).to eq '/articles/new'
    end
  end
end