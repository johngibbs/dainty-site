export const examples = {
  jsx: {
    name: "JavaScript",
    code: `import React from "react";
import App, { Container } from "next/app";
// …

export default class MyApp extends App {
  constructor(props) {
    super(props);

    const colors = generateColorScales(presets.daintyLight);
    const colorConstants = generateColorConstants(colors);

    this.state = {
      preset: "daintyLight",
      configuration: presets.daintyLight,
      colors,
      colorConstants,
      lightnessStart: presets.daintyLight.colors._all.lightnessStart,
      lightnessEnd: 0,
      chroma: 0
    };

    this.updatePreset = this.updatePreset.bind(this);
    this.setPreset = this.setPreset.bind(this);
    this.setLightnessStart = this.setLightnessStart.bind(this);
    this.setLightnessEnd = this.setLightnessEnd.bind(this);
    this.setChroma = this.setChroma.bind(this);
  }
  
  // …`
  },
  csharp: {
    name: "C#",
    code: `using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MyWebApplication.Models;

namespace MyWebApplication.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}`
  },
  css: {
    name: "CSS",
    code: `ul.nav {
  display: flex;
  padding-left: 0;
  margin-left: -12px;
}

@media (max-width: 1023.98px) {
  ul.nav {
    flex-direction: column;
    font-size: 14px;
  }
}

@media (min-width: 1024px) {
  ul.nav {
    flex-direction: row;
    font-size: 16px;
  }
}

ul:not(.nav) > li:before {
  display: inline-block;
  content: "–";
  width: 18px;
  margin-left: -18px;
  color: "neutral16";
}

ul ul {
  margin-bottom: 0;
}`
  },
  python: {
    name: "Python",
    code: `// From https://github.com/gothinkster/django-realworld-example-app/blob/master/conduit/apps/articles/signals.py

from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify

from conduit.apps.core.utils import generate_random_string

from .models import Article

@receiver(pre_save, sender=Article)
def add_slug_to_article_if_not_exists(sender, instance, *args, **kwargs):
    MAXIMUM_SLUG_LENGTH = 255

    if instance and not instance.slug:
        slug = slugify(instance.title)
        unique = generate_random_string()

        if len(slug) > MAXIMUM_SLUG_LENGTH:
            slug = slug[:MAXIMUM_SLUG_LENGTH]

        while len(slug + '-' + unique) > MAXIMUM_SLUG_LENGTH:
            parts = slug.split('-')

            if len(parts) is 1:
                # The slug has no hypens. To append the unique string we must
                # arbitrarly remove \`len(unique)\` characters from the end of
                # \`slug\`. Subtract one to account for extra hyphen.
                slug = slug[:MAXIMUM_SLUG_LENGTH - len(unique) - 1]
            else:
                slug = '-'.join(parts[:-1])

        instance.slug = slug + '-' + unique`
  },
  elixir: {
    name: "Elixir",
    code: `defmodule Euler14 do
  def next(n) when rem(n, 2) == 0, do: div(n, 2)
  def next(n), do: 3 * n + 1

  def collatz(n), do: collatz(n, 1)
  def collatz(1, steps), do: steps
  def collatz(n, steps), do
    collatz(next(n), steps + 1)
  end

  def solve() do
    1..999999
    |> Enum.reduce({0, 0}, fn(n, best = {index, steps}) ->
      c = collatz(n)
      if c > steps do
        {n, c}
      else
        best
      end
    end)
  end
end`
  }
};
