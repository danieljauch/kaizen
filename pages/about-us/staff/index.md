---
layout: post
permalink: /about-us/staff/
title: Staff
staff:
  - name: Charles (Bill) Elder
    category: bod
    title: Co-Vice President
    weight: 3
  - name: Blair Howe
    category: bod
    title: Co-President
    weight: 1
  - name: Darrin Rutt
    category: bod
    title: Co-Vice President
    weight: 4
  - name: Eric Klaas
    category: officer
    weight: 0
  - name: Greg Freehling
    category: bod
    weight: 9
  - name: Jesse Molinar
    category: marshal
    weight: 0
  - name: Jim Young
    category: bod
    title: Co-Secretary
    weight: 6
  - name: J.J. Long
    category: bod
    title: Co-Treasurer
    weight: 7
  - name: John Davis
    category: captain
    weight: -12
  - name: Larry Weber
    category: bod
    title: Co-President
    weight: 2
  - name: Lea Weinkauf
    category: bod
    weight: 10
  - name: Nate Kronholm
    category: captain
    weight: -120
  - name: Roger Ainsworth
    category: bod
    title: Co-Secretary
    weight: 5
  - name: Ron Bateman
    category: chief
    weight: 0
  - name: Shane Doyon
    category: captain
    weight: -28
  - name: Steve Werness
    category: bod
    title: Co-Treasurer
    weight: -8
  - name: Bernie Covillo
    category: chief
    weight: 0
---

<div class="clearfix">
  <div class="col-one">
    <h3 class="staff-header">Board of Directors</h3>
    {% assign items = page.staff | sort: "weight" %}
    {% for item in items %}
      {% if item.category == "bod" and item.weight &gt;= 0 %}
        <div itemscope="" class="clearfix staff-content">
          <p itemprop="name">
            {{ item.name }}{% if item.title %}, <span class="job-title">{{ item.title }}</span>{% endif %}
          </p>
          {% if item.station %}<p>{{ item.station }}</p>{% endif %}
        </div>
      {% endif %}
    {% endfor %}
  </div>

  <div class="col-two">
    <h3 class="staff-header">Chiefs</h3>
    {% assign items = page.staff | sort: "weight" %}
    {% for item in items %}
      {% if item.category == "chief" and item.weight &gt;= 0 %}
        <div itemscope="" class="clearfix staff-content">
          <p itemprop="name">
            {{ item.name }}{% if item.title %}, <span class="job-title">{{ item.title }}</span>{% endif %}
          </p>
          {% if item.station %}<p>{{ item.station }}</p>{% endif %}
        </div>
      {% endif %}
    {% endfor %}

    <h3 class="staff-header">Captains</h3>
    {% assign items = page.staff | sort: "weight" %}
    {% for item in items %}
      {% if item.category == "captain" and item.weight &gt;= 0 %}
        <div itemscope="" class="clearfix staff-content">
          <p itemprop="name">
            {{ item.name }}{% if item.title %}, <span class="job-title">{{ item.title }}</span>{% endif %}
          </p>
          {% if item.station %}<p>{{ item.station }}</p>{% endif %}
        </div>
      {% endif %}
    {% endfor %}

    <h3 class="staff-header">Fire Marshal</h3>
    {% assign items = page.staff | sort: "weight" %}
    {% for item in items %}
      {% if item.category == "marshal" and item.weight &gt;= 0 %}
        <div itemscope="" class="clearfix staff-content">
          <p itemprop="name">
            {{ item.name }}{% if item.title %}, <span class="job-title">{{ item.title }}</span>{% endif %}
          </p>
          {% if item.station %}<p>{{ item.station }}</p>{% endif %}
        </div>
      {% endif %}
    {% endfor %}

    <h3 class="staff-header">Training Officer</h3>
    {% assign items = page.staff | sort: "weight" %}
    {% for item in items %}
      {% if item.category == "officer" and item.weight &gt;= 0 %}
        <div itemscope="" class="clearfix staff-content">
          <p itemprop="name">
            {{ item.name }}{% if item.title %}, <span class="job-title">{{ item.title }}</span>{% endif %}
          </p>
          {% if item.station %}<p>{{ item.station }}</p>{% endif %}
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>